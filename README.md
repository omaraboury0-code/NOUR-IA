<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOUR IA | Boutique Beauté & Soins</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #c98a7c;       /* Rose gold / Nude élégant */
            --primary-dark: #a86c5e;
            --bg-light: #fdf9f8;
            --text-dark: #2c2422;
            --text-muted: #7a6e6b;
            --white: #ffffff;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.6;
        }

        /* Barre d'annonce */
        .top-bar {
            background-color: var(--text-dark);
            color: var(--white);
            text-align: center;
            padding: 8px 15px;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
        }

        /* Header & Navigation */
        header {
            background-color: var(--white);
            box-shadow: 0 2px 15px rgba(0,0,0,0.04);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .navbar {
            max-width: 1200px;
            margin: 0 auto;
            padding: 18px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--text-dark);
            text-decoration: none;
            letter-spacing: 2px;
        }

        .logo span {
            color: var(--primary);
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .cart-btn {
            background: var(--bg-light);
            border: 1px solid #eadad6;
            padding: 8px 16px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
        }

        .cart-btn:hover {
            background: var(--primary);
            color: var(--white);
            border-color: var(--primary);
        }

        .cart-count {
            background: var(--primary);
            color: var(--white);
            font-size: 0.75rem;
            padding: 2px 7px;
            border-radius: 50%;
        }

        .cart-btn:hover .cart-count {
            background: var(--white);
            color: var(--primary);
        }

        /* Section Hero */
        .hero {
            background: linear-gradient(135deg, #f8ece9 0%, #f1dcd7 100%);
            padding: 80px 20px;
            text-align: center;
        }

        .hero-content {
            max-width: 700px;
            margin: 0 auto;
        }

        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            margin-bottom: 15px;
            color: var(--text-dark);
        }

        .hero p {
            color: var(--text-muted);
            font-size: 1.1rem;
            margin-bottom: 30px;
        }

        .btn-primary {
            display: inline-block;
            background-color: var(--primary);
            color: var(--white);
            padding: 14px 32px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: background 0.3s, transform 0.2s;
        }

        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
        }

        /* Section Produits */
        .container {
            max-width: 1200px;
            margin: 60px auto;
            padding: 0 20px;
        }

        .section-title {
            text-align: center;
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            margin-bottom: 10px;
        }

        .section-subtitle {
            text-align: center;
            color: var(--text-muted);
            margin-bottom: 40px;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 30px;
        }

        .product-card {
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: transform 0.3s;
            display: flex;
            flex-direction: column;
        }

        .product-card:hover {
            transform: translateY(-5px);
        }

        .product-img {
            width: 100%;
            height: 260px;
            object-fit: cover;
            background-color: #f4eae8;
        }

        .product-info {
            padding: 20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .product-category {
            font-size: 0.75rem;
            text-transform: uppercase;
            color: var(--primary);
            letter-spacing: 1px;
            font-weight: 600;
        }

        .product-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 5px 0 10px;
        }

        .product-price {
            font-size: 1.15rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 15px;
        }

        .add-to-cart {
            width: 100%;
            padding: 10px;
            background-color: var(--text-dark);
            color: var(--white);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: background 0.3s;
        }

        .add-to-cart:hover {
            background-color: var(--primary);
        }

        /* Avantages */
        .features {
            background-color: var(--white);
            padding: 50px 20px;
            margin-top: 60px;
        }

        .features-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            text-align: center;
        }

        .feature-box h3 {
            margin-bottom: 8px;
            font-size: 1.1rem;
        }

        .feature-box p {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* Panier latéral (Modal) */
        .cart-modal {
            position: fixed;
            top: 0;
            right: -400px;
            width: 100%;
            max-width: 380px;
            height: 100vh;
            background: var(--white);
            box-shadow: -5px 0 25px rgba(0,0,0,0.1);
            z-index: 1000;
            padding: 25px;
            display: flex;
            flex-direction: column;
            transition: right 0.35s ease;
        }

        .cart-modal.open {
            right: 0;
        }

        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }

        .close-cart {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        .cart-items {
            flex-grow: 1;
            overflow-y: auto;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #f5f5f5;
        }

        .cart-footer {
            border-top: 1px solid #eee;
            padding-top: 15px;
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 15px;
        }

        /* Footer */
        footer {
            background-color: var(--text-dark);
            color: var(--white);
            text-align: center;
            padding: 40px 20px;
        }

        footer .logo {
            color: var(--white);
            display: block;
            margin-bottom: 10px;
        }

        footer p {
            color: #b5aba9;
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            .nav-links { display: none; }
            .hero h1 { font-size: 2.2rem; }
        }
    </style>
</head>
<body>

    <!-- Barre d'annonce -->
    <div class="top-bar">
        ✨ Livraison gratuite dès 300 DH d'achat | Paiement à la livraison disponible ✨
    </div>

    <!-- Navigation -->
    <header>
        <nav class="navbar">
            <a href="#" class="logo">NOUR <span>IA</span></a>
            <ul class="nav-links">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#produits">Nos Soins</a></li>
                <li><a href="#avantages">Engagements</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button class="cart-btn" onclick="toggleCart()">
                🛍️ Panier <span class="cart-count" id="cart-count">0</span>
            </button>
        </nav>
    </header>

    <!-- Section Hero -->
    <section class="hero" id="accueil">
        <div class="hero-content">
            <h1>Révélez votre éclat naturel avec NOUR IA</h1>
            <p>Des soins cosmétiques sélectionnés avec soin pour sublimer votre peau et vos cheveux au quotidien.</p>
            <a href="#produits" class="btn-primary">Découvrir la collection</a>
        </div>
    </section>

    <!-- Catalogue Produits -->
    <main class="container" id="produits">
        <h2 class="section-title">Nos Meilleures Ventes</h2>
        <p class="section-subtitle">Les essentiels beauté plébiscités par nos clientes</p>

        <div class="products-grid">
            <!-- Produit 1 -->
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" alt="Sérum Éclat Vitamine C" class="product-img">
                <div class="product-info">
                    <div>
                        <span class="product-category">Soin Visage</span>
                        <h3 class="product-title">Sérum Éclat Vitamine C & Acide Hyaluronique</h3>
                    </div>
                    <div>
                        <div class="product-price">189 DH</div>
                        <button class="add-to-cart" onclick="addToCart('Sérum Éclat Vitamine C', 189)">Ajouter au panier</button>
                    </div>
                </div>
            </div>

            <!-- Produit 2 -->
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80" alt="Huile Capillaire" class="product-img">
                <div class="product-info">
                    <div>
                        <span class="product-category">Soin Cheveux</span>
                        <h3 class="product-title">Élixir Réparateur Huile d'Argan & Kératine</h3>
                    </div>
                    <div>
                        <div class="product-price">149 DH</div>
                        <button class="add-to-cart" onclick="addToCart('Élixir Réparateur Cheveux', 149)">Ajouter au panier</button>
                    </div>
                </div>
            </div>

            <!-- Produit 3 -->
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80" alt="Crème Hydratante" class="product-img">
                <div class="product-info">
                    <div>
                        <span class="product-category">Hydratation</span>
                        <h3 class="product-title">Crème Velours Hydratation Intense 24H</h3>
                    </div>
                    <div>
                        <div class="product-price">165 DH</div>
                        <button class="add-to-cart" onclick="addToCart('Crème Velours Hydratation', 165)">Ajouter au panier</button>
                    </div>
                </div>
            </div>

            <!-- Produit 4 -->
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80" alt="Coffret Beauté" class="product-img">
                <div class="product-info">
                    <div>
                        <span class="product-category">Coffret</span>
                        <h3 class="product-title">Routine Complète NOUR IA Glow</h3>
                    </div>
                    <div>
                        <div class="product-price">390 DH</div>
                        <button class="add-to-cart" onclick="addToCart('Routine Complète Glow', 390)">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Avantages -->
    <section class="features" id="avantages">
        <div class="features-grid">
            <div class="feature-box">
                <h3>🚚 Livraison Rapide</h3>
                <p>Expédition sous 24h à 48h partout au Maroc.</p>
            </div>
            <div class="feature-box">
                <h3>💳 Paiement à la livraison</h3>
                <p>Commandez en toute confiance, payez à réception.</p>
            </div>
            <div class="feature-box">
                <h3>🌿 Qualité Certifiée</h3>
                <p>Formules testées dermatologiquement et sans parabènes.</p>
            </div>
        </div>
    </section>

    <!-- Panier Latéral -->
    <div class="cart-modal" id="cart-modal">
        <div class="cart-header">
            <h3>Votre Panier</h3>
            <button class="close-cart" onclick="toggleCart()">×</button>
        </div>
        <div class="cart-items" id="cart-items">
            <p style="color: #7a6e6b; text-align: center; margin-top: 40px;">Votre panier est vide.</p>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Total :</span>
                <span id="cart-total">0 DH</span>
            </div>
            <button class="btn-primary" style="width: 100%;" onclick="checkout()">Commander maintenant</button>
        </div>
    </div>

    <!-- Pied de page -->
    <footer id="contact">
        <a href="#" class="logo">NOUR <span>IA</span></a>
        <p>Votre destination beauté & bien-être en ligne.</p>
        <p style="margin-top
